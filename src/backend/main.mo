import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  type Timestamp = Nat;
  type Status = { #new; #reviewed; #closed };

  public type Grade = { #eight; #nine; #ten };
  public type WhoIsFilling = { #student; #parent };
  public type PreferredMode = { #online; #in_person };

  public type PsychometricTestBooking = {
    id : Nat;
    name : Text;
    grade : Grade;
    email : Text;
    phone : Text;
    cityState : Text;
    preferredDate : Text;
    preferredTimeWindow : Text;
    notes : Text;
    timestamp : Timestamp;
    status : Status;
  };

  public type CounselingSessionBooking = {
    id : Nat;
    name : Text;
    whoIsFilling : WhoIsFilling;
    grade : Grade;
    email : Text;
    phone : Text;
    cityState : Text;
    preferredDate : Text;
    preferredTimeWindow : Text;
    preferredMode : PreferredMode;
    notes : Text;
    timestamp : Timestamp;
    status : Status;
  };

  public type UserProfile = {
    name : Text;
  };

  let psychometricTestBookings = Map.empty<Nat, PsychometricTestBooking>();
  let counselingSessionBookings = Map.empty<Nat, CounselingSessionBooking>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var nextId = 0;

  func generateId() : Nat {
    let id = nextId;
    nextId += 1;
    id;
  };

  // Authorization setup
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Psychometric Test Booking Functions
  public shared ({ caller }) func submitPsychometricTestBooking(
    name : Text,
    grade : Grade,
    email : Text,
    phone : Text,
    cityState : Text,
    preferredDate : Text,
    preferredTimeWindow : Text,
    notes : Text,
  ) : async Nat {
    let id = generateId();
    let booking : PsychometricTestBooking = {
      id;
      name;
      grade;
      email;
      phone;
      cityState;
      preferredDate;
      preferredTimeWindow;
      notes;
      timestamp = Time.now().toNat();
      status = #new;
    };
    psychometricTestBookings.add(id, booking);
    id;
  };

  public query ({ caller }) func getPsychometricTestBooking(id : Nat) : async PsychometricTestBooking {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view psychometric test bookings");
    };
    switch (psychometricTestBookings.get(id)) {
      case (null) { Runtime.trap("Psychometric test booking does not exist") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func getAllPsychometricTestBookings() : async [PsychometricTestBooking] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all psychometric test bookings");
    };
    psychometricTestBookings.values().toArray();
  };

  // Counseling Session Booking Functions
  public shared ({ caller }) func submitCounselingSessionBooking(
    name : Text,
    whoIsFilling : WhoIsFilling,
    grade : Grade,
    email : Text,
    phone : Text,
    cityState : Text,
    preferredDate : Text,
    preferredTimeWindow : Text,
    preferredMode : PreferredMode,
    notes : Text,
  ) : async Nat {
    let id = generateId();
    let booking : CounselingSessionBooking = {
      id;
      name;
      whoIsFilling;
      grade;
      email;
      phone;
      cityState;
      preferredDate;
      preferredTimeWindow;
      preferredMode;
      notes;
      timestamp = Time.now().toNat();
      status = #new;
    };
    counselingSessionBookings.add(id, booking);
    id;
  };

  public query ({ caller }) func getCounselingSessionBooking(id : Nat) : async CounselingSessionBooking {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view counseling session bookings");
    };
    switch (counselingSessionBookings.get(id)) {
      case (null) { Runtime.trap("Counseling session booking does not exist") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func getAllCounselingSessionBookings() : async [CounselingSessionBooking] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all counseling session bookings");
    };
    counselingSessionBookings.values().toArray();
  };

  // Generic Status Update Function
  public shared ({ caller }) func updateStatus(type_ : Text, id : Nat, newStatus : Status) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update statuses");
    };
    switch (type_) {
      case ("psychometricTestBooking") {
        switch (psychometricTestBookings.get(id)) {
          case (null) { Runtime.trap("Psychometric test booking does not exist") };
          case (?booking) {
            let updatedBooking : PsychometricTestBooking = {
              id = booking.id;
              name = booking.name;
              grade = booking.grade;
              email = booking.email;
              phone = booking.phone;
              cityState = booking.cityState;
              preferredDate = booking.preferredDate;
              preferredTimeWindow = booking.preferredTimeWindow;
              notes = booking.notes;
              timestamp = booking.timestamp;
              status = newStatus;
            };
            psychometricTestBookings.add(id, updatedBooking);
          };
        };
      };
      case ("counselingSessionBooking") {
        switch (counselingSessionBookings.get(id)) {
          case (null) { Runtime.trap("Counseling session booking does not exist") };
          case (?booking) {
            let updatedBooking : CounselingSessionBooking = {
              id = booking.id;
              name = booking.name;
              whoIsFilling = booking.whoIsFilling;
              grade = booking.grade;
              email = booking.email;
              phone = booking.phone;
              cityState = booking.cityState;
              preferredDate = booking.preferredDate;
              preferredTimeWindow = booking.preferredTimeWindow;
              preferredMode = booking.preferredMode;
              notes = booking.notes;
              timestamp = booking.timestamp;
              status = newStatus;
            };
            counselingSessionBookings.add(id, updatedBooking);
          };
        };
      };
      case (_) { Runtime.trap("Invalid type") };
    };
  };

  public query ({ caller }) func filterPsychometricTestBookingsByTimestamp(startTime : Timestamp, endTime : Timestamp) : async [PsychometricTestBooking] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can filter psychometric test bookings");
    };
    psychometricTestBookings.values().toArray().filter(
      func(booking : PsychometricTestBooking) : Bool { booking.timestamp >= startTime and booking.timestamp <= endTime }
    );
  };

  public query ({ caller }) func filterCounselingSessionBookingsByTimestamp(startTime : Timestamp, endTime : Timestamp) : async [CounselingSessionBooking] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can filter counseling session bookings");
    };
    counselingSessionBookings.values().toArray().filter(
      func(booking : CounselingSessionBooking) : Bool { booking.timestamp >= startTime and booking.timestamp <= endTime }
    );
  };

  public query ({ caller }) func getNewBookingsCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view booking counts");
    };

    let newPsychometricTestBookings = psychometricTestBookings.values().toArray().filter(
      func(booking : PsychometricTestBooking) : Bool { booking.status == #new }
    ).size();

    let newCounselingSessionBookings = counselingSessionBookings.values().toArray().filter(
      func(booking : CounselingSessionBooking) : Bool { booking.status == #new }
    ).size();

    newPsychometricTestBookings + newCounselingSessionBookings;
  };

  public query ({ caller }) func getBookingsWithinDays(days : Nat) : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view booking statistics");
    };
    let currentTime = Time.now().toNat();
    let dayRange = days * 24 * 60 * 60 * 1_000_000_000;
    let startTime = if (currentTime > dayRange) { currentTime - dayRange } else { 0 };

    let psychometricTestBookingsCount = psychometricTestBookings.values().toArray().filter(
      func(booking : PsychometricTestBooking) : Bool { booking.timestamp >= startTime }
    ).size();

    let counselingSessionBookingsCount = counselingSessionBookings.values().toArray().filter(
      func(booking : CounselingSessionBooking) : Bool { booking.timestamp >= startTime }
    ).size();

    psychometricTestBookingsCount + counselingSessionBookingsCount;
  };
};
