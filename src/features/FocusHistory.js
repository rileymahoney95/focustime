import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { fontSizes, colors, spacing } from '../utils/constants';

export const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

  const renderItem = ({ item }) => (
    <Text style={styles.taskItem}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: spacing.md,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  taskItem: {
    color: colors.white,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  },
});
