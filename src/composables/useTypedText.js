import { ref, onMounted } from "vue";

export function useTypedText(words, speed = 80, pause = 1500) {
  const displayText = ref("");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = words[wordIndex];

    if (!deleting) {
      displayText.value = current.slice(0, charIndex++);
      if (charIndex > current.length) {
        setTimeout(() => (deleting = true), pause);
      }
    } else {
      displayText.value = current.slice(0, charIndex--);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, deleting ? speed / 2 : speed);
  }

  onMounted(type);

  return { displayText };
}
