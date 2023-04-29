import './End.css'
export const End = (): JSX.Element => {
  return (
    <footer className="end">
      <p>
        &copy;<time dateTime="2023-1-1">2023</time> Made by {''}
        <a
          href="https://alexis033.github.io/"
          rel="noreferrer"
          target="_blank"
          title="portafolio Maikcol"
        >
          <strong>
            <em>Maikcol Guevara</em>
          </strong>
        </a>
      </p>
      <ul>
        <li>
          <address>
            <a
              href="https://www.linkedin.com/in/maikcol-guevara/"
              rel="noreferrer"
              target="_blank"
              title="linkedin"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </address>
        </li>

        <li>
          <address>
            <a
              href="https://github.com/Alexis033"
              rel="noreferrer"
              target="_blank"
              title="GitHub profile"
            >
              <i className="fa-brands fa-square-github" />
            </a>
          </address>
        </li>
      </ul>
    </footer>
  )
}
