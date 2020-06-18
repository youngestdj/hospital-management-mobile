import React from "react";
import { Text, View } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRESCRIPTION } from "../../graphql/queries";

const ViewPrescription = () => {
  const { data, loading, error } = useQuery(GET_PRESCRIPTION);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pContainer}>
        <Text style={styles.boldText}>Last prescription</Text>
        <View style={styles.pWrapper}>
          {loading && <Text style={styles.pText}>Loading prescription...</Text>}
          {error && (
            <Text style={styles.pText}>{e.graphQLErrors[0].messageError}</Text>
          )}
          {data && (
            <View style={styles.list}>
              <View style={styles.listItem}>
                <Text style={[styles.listText, styles.listTextBold]}>
                  Appointment date
                </Text>
                <Text style={styles.listText}>
                  {data.prescription.data[0].created_at}
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={[styles.listText, styles.listTextBold]}>
                  Prescription
                </Text>
                <Text style={styles.listText}>
                  {data.prescription.data[0].prescription}
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={[styles.listText, styles.listTextBold]}>
                  Doctor
                </Text>
                <Text style={styles.listText}>
                  {`${data.prescription.data[0].doctor.firstname} ${data.prescription.data[0].doctor.lastname}`}{" "}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ViewPrescription;
