import gql from "graphql-tag";

export const GET_PATIENT_PROFILE = gql`
  query patient($id: String!) {
    patient(id: $id) {
      id
      firstname
      lastname
      email
      phone
      dob
      gender
      occupation
      address
      nationality
      marital_status
      religion
      ethnicity
      informant
      appointments {
        id
        date
        description
        patient
      }
    }
  }
`;

export const GET_PRESCRIPTION = gql`
  {
    prescription(first: 1) {
      data {
        id
        prescription
        created_at
        doctor {
          firstname
          lastname
        }
      }
    }
  }
`;
