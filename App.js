import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from 'react-native';
import { colors } from './src/utils/constants';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [subject, setSubject] = useState(null);
  const [history, setHistory] = useState([]);

  const onTimerEnd = () => {
    setHistory([...history, subject]);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!subject ? (
        <>
          <Focus addSubject={setSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={subject}
          onTimerEnd={onTimerEnd}
          clearSubject={() => setSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
