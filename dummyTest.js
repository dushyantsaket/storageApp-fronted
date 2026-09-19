// const shoudTestPass = Math.random() < 0.5;
const shoudTestPass = true;
if (shoudTestPass) {
  console.log("test passed!!!");
  process.exit(0);
} else {
  console.log("test failed!!!");
  process.exit(1);
}
