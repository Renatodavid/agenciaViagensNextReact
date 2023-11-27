import React from 'react'

export default function formulario() {
  return (
    function incrementDecrement(elementId, change) {
        var element = document.getElementById(elementId);
        var value = parseInt(element.textContent);
        
        if (value + change >= 0) {
          element.textContent = value + change;
        }
      },
      
      function searchGoogle() {
        var searchInput = document.getElementById('search-input').value;
        if (searchInput) {
          var googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
          window.open(googleSearchURL, '_blank');
        }
      }
    
  )
}
