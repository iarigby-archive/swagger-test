declare namespace Components {
    namespace Schemas {
        /**
         * From T, pick a set of properties whose keys are in the union K
         */
        export interface PickUserEmailOrNameOrPhoneNumbers {
            email: string;
            name: string;
            phoneNumbers: string[];
        }
        export interface User {
            id: number; // double
            email: string;
            name: string;
            status?: ("Happy") | ("Sad");
            phoneNumbers: string[];
        }
        export type UserCreationParams = PickUserEmailOrNameOrPhoneNumbers;
    }
}
declare namespace Paths {
    namespace CreateUser {
        export type RequestBody = Components.Schemas.UserCreationParams;
    }
    namespace GetUser {
        namespace Parameters {
            export type Name = string;
            export type UserId = number; // double
        }
        export interface PathParameters {
            userId: Parameters.UserId; // double
        }
        export interface QueryParameters {
            name?: Parameters.Name;
        }
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
    }
}
