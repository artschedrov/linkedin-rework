import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProfileEducation} from './profile.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { PROFILE, PROFILE_EXPERIENCE, PROFILE_PROJECTS, PROFILE_SKILLS } from './mock-profile';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})

export class ProfileService {

  constructor(private http: HttpClient) {}

  getProfileInfo() {
    return Promise.resolve(PROFILE);
  }

  getProfileProjects() {
    return Promise.resolve(PROFILE_PROJECTS);
  }

  getProfileSkills() {
    return Promise.resolve(PROFILE_SKILLS);
  }

  getProfileExperience() {
    return Promise.resolve(PROFILE_EXPERIENCE);
  }
  
  getProfileEducation(): Observable<ProfileEducation[]> {
    return this.http.get(`${environment.fireBaseUrl}/education.json`)
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