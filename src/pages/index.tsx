import React from 'react';

export default function() {
  return (
    
    <form method="post" action="hello">
    <p>
        <label for="name">Votre nom:</label>
        <input type="text" name="name" id="name" placeholder="Ex : Bukarsa" size="30" maxlength="10" />
    </p>
    <input type="submit" value="Envoyer" />
</form>
  );
}
