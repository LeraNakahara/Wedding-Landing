function updateCountdown() {
  const weddingDate = new Date(2025, 6, 25);
  const now = new Date();

  if (weddingDate > now) {
    const timeLeft = weddingDate.getTime() - now.getTime();
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(3, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0"
    );
  } else {
    document.getElementById("days").innerText = "000";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}

setInterval(updateCountdown, 1000);

updateCountdown();
