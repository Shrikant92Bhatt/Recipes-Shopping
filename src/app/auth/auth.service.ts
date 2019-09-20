import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
    kind?: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User>(null);
    constructor (private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXyiLYyPkTPK-iwqHRrnm-U79GK589R18',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(
                catchError(this.handelError),
                tap(resp => {
                    this.handelAuthentication(resp.email, resp.localId, resp.idToken, resp.expiresIn);
                })
            );

    }
    signIn(email: string, pass: string) {
        return this.http
            .post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXyiLYyPkTPK-iwqHRrnm-U79GK589R18',
                {
                    email: email,
                    password: pass,
                    returnSecureToken: true
                }
            )
            .pipe(
                catchError(this.handelError),
                tap(resp => {
                    this.handelAuthentication(resp.email, resp.localId, resp.idToken, resp.expiresIn);
                })
            );
    }

    logOut() {
        this.user.next(null);
        localStorage.clear();

    }
    private handelError(errorRes) {
        let errorMsg = 'An Unknown Error Occurred';
        if (!errorRes.error && !errorRes.error.error) {
            return throwError(errorMsg);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMsg =
                    'There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case 'INVALID_PASSWORD':
                errorMsg =
                    'The password is invalid or the user does not have a password.';
                break;
            case 'USER_DISABLED':
                errorMsg =
                    'The user account has been disabled by an administrator.';
                break;
            case 'EMAIL_EXISTS':
                errorMsg =
                    'The email address is already in use by another account.';
                break;
            case 'OPERATION_NOT_ALLOWED:':
                errorMsg = 'Password sign-in is disabled for this project.';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMsg =
                    'We have blocked all requests from this device due to unusual activity. Try again later.';
                break;

            default:
                errorMsg = 'Error Occurred!!!';
                break;
        }
        return throwError(errorMsg);
    }

    private handelAuthentication(email: string, userId: string, token: string, expiresIn: string) {
        const tokenexperation = new Date(new Date().getTime() + + expiresIn * 1000);
        const newUser = new User(email, userId, token, tokenexperation);
        this.user.next(newUser);
        localStorage.setItem('userData', JSON.stringify(newUser));
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next(loadedUser)
        }

    }
}
