const codeContainers = Array.from(
  document.querySelectorAll(".custom-code-box")
);

for (let codeContainer of codeContainers) {
  try {
    const copyButton = codeContainer.querySelector(
      "button"
    );
    const copyButtonHTML = copyButton.innerHTML;
    const codeContents = (codeContainer.querySelector("code"))
      .innerText;
    copyButton.addEventListener("click", async () => {
      await navigator.clipboard.writeText(codeContents);
      copyButton.innerText = "Copied!";
      setTimeout(() => {
        copyButton.innerHTML = copyButtonHTML;
      }, 1500);
    });
  } catch (e) {
    console.error(e)
  }
}