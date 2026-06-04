import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("");
  const [hasil, setHasil] = useState("");

  const cariData = async () => {
    setStatus("Loading...");
    setHasil("");

    // Simulasi request ke server selama 2 detik
    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setStatus("Pencarian Selesai");
    setHasil(`Hasil pencarian untuk: ${keyword}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Cari Data</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan kata kunci..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={cariData}
      >
        <Text style={styles.buttonText}>Cari</Text>
      </TouchableOpacity>

      {status !== "" && (
        <Text style={styles.status}>{status}</Text>
      )}

      {hasil !== "" && (
        <Text style={styles.result}>{hasil}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
  result: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});