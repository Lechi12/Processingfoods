
</script>
document.getElementById('homeLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents page reload
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
