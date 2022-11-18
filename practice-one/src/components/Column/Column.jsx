import './column.css';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import Image from '../Image/Image';

export default function Column({ contents, socialIcon = '' }) {
  const colName = Object.keys(contents);

  return colName.map((col, index) => (
    <ul key={index} className="col">
      <li>
        <h3 className="col__title" href="/">
          {col.replace('_', ' ').toLowerCase()}
        </h3>
      </li>
      {contents[col].length ? (
        contents[col].map((link, index) => (
          <li key={index}>
            <Link style="footer" to="javascript:void(0)">
              {link}
            </Link>
          </li>
        ))
      ) : (
        <li>
          <Image src={socialIcon} alt="social icon" />
        </li>
      )}
    </ul>
  ));
}

Column.propTypes = {
  contents: PropTypes.array.isRequired,
};