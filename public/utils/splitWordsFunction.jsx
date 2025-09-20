export function splitWordsFunction(texte, last, separator) {
  const texteArray = texte.split(separator);
  return (
    <p>
      {texteArray.map((msg, i) => (
        <span key={msg + i}>
          {msg}
          {i === texteArray.length - 1 ? last : separator}
        </span>
      ))}
    </p>
  );
}
