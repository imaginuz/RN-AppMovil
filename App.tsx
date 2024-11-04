/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch,
} from 'react-native';

import 
  coursesData from './src/data/data.json'; // JSON data Clases

import 
  { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Ingeniería En Ciencias De La Computación</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {coursesData.map((periodData, index) => (
          <View key={index} style={styles.periodContainer}>
            <Text style={[styles.periodTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
              Periodo {periodData.period}
            </Text>
            {periodData.courses.map((course, idx) => (
              <View key={idx} style={[styles.card, { backgroundColor: isDarkMode ? '#444444' : '#fff' }]}>
                <Text style={[styles.courseCode, { color: isDarkMode ? '#bbbbbb' : '#555555' }]}>{course.code}</Text>
                <Text style={[styles.courseName, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{course.name}</Text>
                <Text style={[styles.courseStatus, { color: isDarkMode ? '#90ee90' : 'green' }]}>
                  {course.status}: {course.grade}%
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  periodContainer: {
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 10,
  },
  periodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  courseCode: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  courseStatus: {
    fontSize: 14,
  }
});


export default App;
