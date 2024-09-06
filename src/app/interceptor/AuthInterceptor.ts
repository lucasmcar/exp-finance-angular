import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "../services/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router, private loginService: LoginService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token'); 
        const authReq = req.clone({ setHeaders: {
            Authorization: 'Bearer ' + token
          } });
        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) =>{
                if(error.status === 0 || error.status >= 500){
                    console.error("Erro de conexão");

                    this.loginService.logout();

                    this.router.navigate(['/login']);
                }
                return throwError(error);
            })

        )
    
    }
}