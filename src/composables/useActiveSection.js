import { ref, onMounted, onUnmounted } from "vue";

const activeHash = ref(window.location.hash || "#home");

const onHashChange = () => {
  activeHash.value = window.location.hash || "#home";
};

export function useActiveSection() {
  onMounted(() => {
    window.addEventListener("hashchange", onHashChange);
  });

  onUnmounted(() => {
    window.removeEventListener("hashchange", onHashChange);
  });

  return { activeHash };
}
