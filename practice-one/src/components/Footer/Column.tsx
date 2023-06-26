import './column.css'
import { Link, Image } from '../index'
import { clearUnderscore } from '@helper/string'
import { IColumnProps } from '@types'

const Column = ({ contents, socialIcon = '' }: IColumnProps) => {
  const colName = Object.keys(contents) as (keyof typeof contents)[]

  return (
    <>
      {colName.map((col, index) => (
        <ul key={index} className="col">
          <li>
            <h3 className="col__title">{clearUnderscore(col)}</h3>
          </li>
          {contents[col].length ? (
            contents[col].map((link) => (
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
      ))}
    </>
  )
}

export default Column
