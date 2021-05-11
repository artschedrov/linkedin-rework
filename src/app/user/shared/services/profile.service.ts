import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile, ProfileExperience, ProfileProject, ProfileSkills} from './profile.interface';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfileInfo(): Observable<Profile[]> {
    return this.http.get(`${environment.fireBaseUrl}/profiles.json`)
    .pipe(
      map((response: {[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id:key
      }));
    }));
  }

  getProfileProjects(): Observable<ProfileProject[]> {
    return this.http.get(`${environment.fireBaseUrl}/projects.json`)
    .pipe(
      map((response: {[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id:key
      }));
    }));
  }

  getProfileSkills(): Observable<ProfileSkills[]> {
    return this.http.get(`${environment.fireBaseUrl}/skills.json`)
    .pipe(
      map((response: {[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id:key
      }));
    }));
  }

  getProfileExperience(): Observable<ProfileExperience[]> {
    return this.http.get(`${environment.fireBaseUrl}/experience.json`)
    .pipe(
      map((response: {[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id:key
      }));
    }));
  }
}