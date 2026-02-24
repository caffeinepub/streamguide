import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";

module {
  // Old types
  type OldStatus = { #new; #reviewed; #closed };
  type OldGrade = { #eight; #nine; #ten };
  type OldWhoIsFilling = { #student; #parent };
  type OldPreferredMode = { #online; #in_person };
  type OldContactInquiry = {
    id : Nat;
    name : Text;
    whoIsFilling : OldWhoIsFilling;
    grade : OldGrade;
    cityState : Text;
    email : Text;
    phone : Text;
    preferredContactMethod : { #email; #phone; #both };
    message : Text;
    timestamp : Nat;
    status : OldStatus;
  };
  type OldPsychometricTestBooking = {
    id : Nat;
    name : Text;
    grade : OldGrade;
    email : Text;
    phone : Text;
    cityState : Text;
    preferredDate : Text;
    preferredTimeWindow : Text;
    notes : Text;
    timestamp : Nat;
    status : OldStatus;
  };
  type OldCounselingSessionBooking = {
    id : Nat;
    name : Text;
    whoIsFilling : OldWhoIsFilling;
    grade : OldGrade;
    email : Text;
    phone : Text;
    cityState : Text;
    preferredDate : Text;
    preferredTimeWindow : Text;
    preferredMode : OldPreferredMode;
    notes : Text;
    timestamp : Nat;
    status : OldStatus;
  };
  type OldUserProfile = {
    name : Text;
  };
  type OldActor = {
    contactInquiries : Map.Map<Nat, OldContactInquiry>;
    psychometricTestBookings : Map.Map<Nat, OldPsychometricTestBooking>;
    counselingSessionBookings : Map.Map<Nat, OldCounselingSessionBooking>;
    userProfiles : Map.Map<Principal, OldUserProfile>;
    accessControlState : AccessControl.AccessControlState;
    nextId : Nat;
  };

  // New types
  type NewStatus = { #new; #reviewed; #closed };
  type NewGrade = { #eight; #nine; #ten };
  type NewWhoIsFilling = { #student; #parent };
  type NewPreferredMode = { #online; #in_person };
  type NewPsychometricTestBooking = {
    id : Nat;
    name : Text;
    grade : NewGrade;
    email : Text;
    phone : Text;
    cityState : Text;
    preferredDate : Text;
    preferredTimeWindow : Text;
    notes : Text;
    timestamp : Nat;
    status : NewStatus;
  };
  type NewCounselingSessionBooking = {
    id : Nat;
    name : Text;
    whoIsFilling : NewWhoIsFilling;
    grade : NewGrade;
    email : Text;
    phone : Text;
    cityState : Text;
    preferredDate : Text;
    preferredTimeWindow : Text;
    preferredMode : NewPreferredMode;
    notes : Text;
    timestamp : Nat;
    status : NewStatus;
  };
  type NewUserProfile = {
    name : Text;
  };
  type NewActor = {
    psychometricTestBookings : Map.Map<Nat, NewPsychometricTestBooking>;
    counselingSessionBookings : Map.Map<Nat, NewCounselingSessionBooking>;
    userProfiles : Map.Map<Principal, NewUserProfile>;
    accessControlState : AccessControl.AccessControlState;
    nextId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    {
      psychometricTestBookings = old.psychometricTestBookings;
      counselingSessionBookings = old.counselingSessionBookings;
      userProfiles = old.userProfiles;
      accessControlState = old.accessControlState;
      nextId = old.nextId;
    };
  };
};
