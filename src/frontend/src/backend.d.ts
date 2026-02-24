import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PsychometricTestBooking {
    id: bigint;
    status: Status;
    preferredTimeWindow: string;
    name: string;
    cityState: string;
    email: string;
    grade: Grade;
    preferredDate: string;
    notes: string;
    timestamp: Timestamp;
    phone: string;
}
export type Timestamp = bigint;
export interface CounselingSessionBooking {
    id: bigint;
    status: Status;
    preferredTimeWindow: string;
    name: string;
    cityState: string;
    email: string;
    grade: Grade;
    preferredDate: string;
    notes: string;
    preferredMode: PreferredMode;
    timestamp: Timestamp;
    phone: string;
    whoIsFilling: WhoIsFilling;
}
export interface UserProfile {
    name: string;
}
export enum Grade {
    ten = "ten",
    nine = "nine",
    eight = "eight"
}
export enum PreferredMode {
    in_person = "in_person",
    online = "online"
}
export enum Status {
    new_ = "new",
    closed = "closed",
    reviewed = "reviewed"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum WhoIsFilling {
    student = "student",
    parent = "parent"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    filterCounselingSessionBookingsByTimestamp(startTime: Timestamp, endTime: Timestamp): Promise<Array<CounselingSessionBooking>>;
    filterPsychometricTestBookingsByTimestamp(startTime: Timestamp, endTime: Timestamp): Promise<Array<PsychometricTestBooking>>;
    getAllCounselingSessionBookings(): Promise<Array<CounselingSessionBooking>>;
    getAllPsychometricTestBookings(): Promise<Array<PsychometricTestBooking>>;
    getBookingsWithinDays(days: bigint): Promise<bigint>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCounselingSessionBooking(id: bigint): Promise<CounselingSessionBooking>;
    getNewBookingsCount(): Promise<bigint>;
    getPsychometricTestBooking(id: bigint): Promise<PsychometricTestBooking>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitCounselingSessionBooking(name: string, whoIsFilling: WhoIsFilling, grade: Grade, email: string, phone: string, cityState: string, preferredDate: string, preferredTimeWindow: string, preferredMode: PreferredMode, notes: string): Promise<bigint>;
    submitPsychometricTestBooking(name: string, grade: Grade, email: string, phone: string, cityState: string, preferredDate: string, preferredTimeWindow: string, notes: string): Promise<bigint>;
    updateStatus(type: string, id: bigint, newStatus: Status): Promise<void>;
}
