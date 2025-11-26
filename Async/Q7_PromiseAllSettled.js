// Given functions
function loadProfile() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Profile Loaded"), 2000)
  );
}

function loadPosts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Posts Loaded"), 1500)
  );
}

function loadMessages() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Messages Loaded"), 1000)
  );
}

// Randomly reject one Promise
function loadNotifications() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Notifications Loaded");
      } else {
        reject(new Error("Failed to load notifications"));
      }
    }, 1200);
  });
}

async function loadDashboard() {
  const startTime = Date.now();
  
  console.log("🔄 Loading dashboard modules...\n");

  // Use Promise.allSettled() to handle all promises
  // It waits for all promises to settle (resolve or reject)
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages(),
    loadNotifications(),
  ]);

  const endTime = Date.now();
  const totalTime = endTime - startTime;

  console.log("📊 Module Status:\n");

  const modules = ["Profile", "Posts", "Messages", "Notifications"];
  
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✅ ${modules[index]}: ${result.value}`);
    } else {
      console.log(`❌ ${modules[index]}: ${result.reason.message}`);
    }
  });

  console.log(`\n⏱️  Total time taken: ${totalTime}ms`);
  
  // Summary
  const succeeded = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected").length;
  console.log(`\n📈 Summary: ${succeeded} succeeded, ${failed} failed`);
}

loadDashboard();
