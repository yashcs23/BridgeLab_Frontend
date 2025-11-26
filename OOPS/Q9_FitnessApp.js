class FitnessAnalytics {
  constructor(workoutData) {
    this.workoutData = workoutData;
  }

  getActiveUsers() {
    if (!this.workoutData || this.workoutData.length === 0) {
      throw new Error('Dataset is empty');
    }
    return this.workoutData.filter(data => data.steps > 7000);
  }

  getAverageCalories() {
    if (!this.workoutData || this.workoutData.length === 0) {
      throw new Error('Dataset is empty');
    }
    const totalCalories = this.workoutData.reduce((sum, data) => sum + data.calories, 0);
    return totalCalories / this.workoutData.length;
  }

  getUserSummary() {
    if (!this.workoutData || this.workoutData.length === 0) {
      throw new Error('Dataset is empty');
    }
    return this.workoutData.map(data => 
      `${data.user}: ${data.steps} steps, ${data.calories} calories burned`
    );
  }
}

// Test data
const workoutData = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

try {
  const analytics = new FitnessAnalytics(workoutData);
  
  console.log('Active Users (steps > 7000):', analytics.getActiveUsers());
  console.log('Average Calories Burned:', analytics.getAverageCalories().toFixed(2));
  console.log('User Summary:', analytics.getUserSummary());
  
  // Test error handling
  const emptyAnalytics = new FitnessAnalytics([]);
  console.log(emptyAnalytics.getActiveUsers());
} catch (error) {
  console.error(`Error: ${error.message}`);
}
