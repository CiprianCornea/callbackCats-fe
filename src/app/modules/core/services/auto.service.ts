import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {UserAuthDto} from "../models/user-auth.dto";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AutoService {
  private currentUserSubject!: BehaviorSubject<UserAuthDto>;
  public currentUser!: Observable<UserAuthDto>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
}
