import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </main>
    </div>
  );
}

export default NotFoundPage;
