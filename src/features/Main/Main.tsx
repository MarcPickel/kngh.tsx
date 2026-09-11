import "./Main.css";

import arrow from "../../assets/arrow_circle_icon.svg";

function Main() {

    return (
    <main className="main">

{/*

What ought to be in the form?
- The form is for prayer intentions for the conversion of sinners.
- So, a name is given of the person in need of prayer.
- Perhaps the affiliate of the named person? e.g. Mother, Father, Brother, Sister, Friend, etc.
- A text box that allows the person to give any detail that might be relevant, or anything that person is struggling with
for which we could pray for specifically (but would that be prudent and holy? It might just be better to ask for a name without description)

Then, upon submission, the form ought to say:
- Thank you for submitting your loved one's name (or whatever)
- (Loved one's name) has been added into our prayers for the conversion of sinners,
as well as for our sacrifices and offering Holy Communion for the conversion of sinners

*/}
<section className="section section__top section_blue">
    <div className="section__form-container">
        <form className="form">
            <label htmlFor="name" className="form__label">Please name the loved one for whom you would like us to pray for conversion:</label>    
                <div className="form__input-container">
                <input 
                type="text"
                id="name"
                name="name"
                required
                minLength={1}
                maxLength={50}
                placeholder="e.g. John, Therese, Bob, Amy"
                className="form__input"
                />
                <button type="submit" className="form__submit-button"><img className="form__input-icon" src={arrow}/></button>
                </div>
        </form>
    </div>
    <div className="section__counter-container">
        <p className="section__counter-text">Number of prayers requested for the conversion of sinners:</p>
        <p className="section__counter">4949</p>
    </div>
</section>
    </main>)
}

export default Main;