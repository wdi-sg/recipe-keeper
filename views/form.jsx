const React = require('react');

export default class form extends React.Component {
    render(){
        return (
            <html>
                <body>
                    <div>
                        <form method="POST" action="/recipes">
                            <input type="text" name="title" placeholder="title"/>
                            <input type="text" name="ingredients" placeholder="ingredients"/>
                            <input type="text" name="instructions" placeholder="instructions"/>
                            <input type="submit" value='submit'/>
                        </form>
                    </div>
                </body>
            </html>
            )
    }
}