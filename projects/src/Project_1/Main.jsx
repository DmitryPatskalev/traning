import css from "./Style.module.css";

export default function Main() {
  return (
    <main>
      <h1 className={css.main_title}>Fun facts about React</h1>
      <ul className={css.main_facts}>
        <li>React is not a framework</li>
        <li>React development and SEO go together</li>
        <li>Virtual DOM is faster as compare to react DOM</li>
        <li>React is more popular</li>
        <li>Embraces Immutability</li>
      </ul>
    </main>
  );
}
