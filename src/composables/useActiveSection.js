import { ref, onMounted, onUnmounted } from "vue";

const activeHash = ref(window.location.hash || "#home");

export function useActiveSection() {
  const onScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    let current = "#home";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (window.scrollY >= top - height / 3) {
        current = `#${section.id}`;
      }
    });

    if (activeHash.value !== current) {
      activeHash.value = current;
      // Update browser URL without scrolling
      history.replaceState(null, "", current);
    }
  };

  const onHashChange = () => {
    activeHash.value = window.location.hash || "#home";
  };

  onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("hashchange", onHashChange);
  });

  return { activeHash };
}
