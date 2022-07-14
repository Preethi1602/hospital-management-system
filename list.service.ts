import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public doctorlist: BehaviorSubject<any> = new BehaviorSubject<any>({});
  newdoctor: any;
  constructor(private dataserviceservice:DataserviceService) { }

  doctors = [{
    id: 1,
    image: "../assets/heart.jpg",
    title: "Cardiologist",
    name: "Dr.David",
    time: "10.00am to 01.00pm",
    description: "We have a team of highly qualified and experienced cardiologists, interventional cardiologists, and cardiac surgeons who provide comprehensive care for a wide range of cardiac conditions in adults & children.Treatment for Cardiac conditions offered ranges from medication, treatment of underlying conditions, interventional procedures to both minimally invasive and open heart surgery. To provide comprehensive care to patients, the team works closely with allied departments to ensure accurate diagnosis are reached and appropriate pre and post treatment care is provided."
  },
  {
    id: 2,
    image: "../assets/gyneo.jpg",
    title: "Gynecologist",
    name: "Dr.Thomas",
    time: "10.00am to 01.00pm",
    description: "Our Obstetrics and Gynaecology wing specialises in unmatched care for the pregnant woman and her unborn child. We are also experts in treating health issues and diseases concerning women with a combination of new-age medicine and care that reminds you of home. In our quest to provide nothing but the best of health care to a woman who is nurturing life"
  },
  {
    id: 3,
    image: "../assets/Paedia.jpg",
    title: "Paediatrician",
    name: "Dr.Sebastian",
    time: "10.00am to 01.00pm",
    description: "Department of Paediatrics & Neonatology to serve the children of our community and their families. We offer a wide range of services catering to all age groups, from a newborn baby till 18 years of age, including newborn resuscitation, transport facilities, well baby follow-up, immunisation, specialty clinics, state-of-the-art NICU and PICU, and a dedicated Paediatric Emergency Room"
  },
  {
    id: 4,
    image: "../assets/neuro.jpg",
    title: "Neurologist",
    name: "Dr.William",
    time: "01.00pm to 06.00pm",
    description: "Our Department of Neuro Sciences provides care and treatment for a wide range of neurological issues in both children and adults. The team consists of highly experienced neurologists and neurosurgeons who provide accurate diagnosis and care for patients. Our globally accredited hospitals feature a wide range diagnostic and treatment facilities that include Tesla MRI and CT scanners, ECG, & EEG. The facilities also have state-of-the-art Critical Care Units and rehabilitation centres to provide expert care and recovery for patients."
  },
  {
    id: 5,
    image: "../assets/ortho.jpg",
    title: "Orthopedic",
    name: "Dr.Richard",
    time: "06.00pm to 09.00pm",
    description: "Our Department of Orthopaedics provides comprehensive and world-class orthopaedics services. The expert team of consultants offer specialised care in the fields of complex trauma, poly-trauma and other sub-specialties of orthopaedics. It provides management for all disorders of bone, joint, and a variety of musculoskeletal disorders.The department has extensive experience in diagnosing and treating upper & lower limb surgery, trauma, bone diseases and congenital conditions. In addition to an excellent orthopaedic staff, we also work with efficient occupational therapists, physiotherapists and pain management experts."
  },
  {
    id: 6,
    image: "../assets/dermatologist.png",
    title: "Dermatologist",
    name: "Dr.Daniel",
    time: "06.00pm to 09.00pm",
    description: "ndulge the facility of Dermatology that helps in eliminating skin problems using aetiology: diagnosis and treatment methods. Cosmetology includes cosmetic procedures like laser treatments for acne, scars, stretch marks and hair problems.With our experienced and individual focused specialists, you are assured of complete, effective and safe treatments. Procedures happen only after the right diagnosis and post understanding what suits that each and every individual. There are no templated solutions here"
  },
  {
    id: 7,
    image: "../assets/oncologist.jpg",
    title: "Oncologist",
    name: "Dr.Johnson",
    time: "02.00pm to 06.00pm",
    description: "These internists are cancer specialists. They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer"
  },
  {
    id: 8,
    image: "../assets/nephrologists.jpg",
    title: "Nephrologist",
    name: "Dr.Robert",
    time: "10.00am to 01.00pm",
    description: "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease."
  }
  ]
  getDoctors() {
    // return this.doctors;
    return this.dataserviceservice.getData('Hospital');
  }

  getdoctorslist(doctor: any) {
    this.doctorlist.next(doctor);
  }
  



}
