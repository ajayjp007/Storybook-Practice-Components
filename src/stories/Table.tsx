import './Table.css'

interface TableProps {
    backgroundColor?: string;
    color?: string;
    headingItems: Array<string>;
    row: Array<string>
}


export const Table = ({
    backgroundColor,
    color,
    headingItems = [
        'heading',
        'heading',
        'heading'
    ],
    row = [
        'items',
        'items',
        'items',
    ],
    ...props
}: TableProps) => {



    return (
        <table className='table-container'>
            <tr className='table-heading-container' style={{ backgroundColor, color }}>
                {
                    headingItems.map((element, index) => {
                        return (
                            <td className='table-header-items'>{element}</td>
                        )
                    })
                }
            </tr>
            <tr className='table-contents' > {
                    row.map((element, index) => {
                        return (
                            <td className='table-header-items'>{element}</td>
                        )
                    })
                }

            </tr>
            <tr className='table-contents' > {
                    row.map((element, index) => {
                        return (
                            <td className='table-header-items'>{element}</td>
                        )
                    })
                }

            </tr>
            <tr className='table-contents' > {
                    row.map((element, index) => {
                        return (
                            <td className='table-header-items'>{element}</td>
                        )
                    })
                }

            </tr>
        </table>
    );
};
