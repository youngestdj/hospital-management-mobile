import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!, $user: String!) {
    login(email: $email, password: $password, user: $user) {
      id
      token
      firstname
      lastname
      email
    }
  }
`;

export const BOOK_APPOINTMENT = gql`
  mutation bookAppointment($date: String!, $description: String!) {
    bookAppointment(date: $date, description: $description) {
      id
      date
      description
    }
  }
`;
