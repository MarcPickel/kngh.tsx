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
<section className="section">
    <div className="section__form-container">
        <form className="form">
            <label htmlFor="name">Please name the person for whom you would like us to pray for conversion</label>    
                <input 
                type="text"
                id="name"
                name="name"
                required
                minLength={1}
                maxLength={20}
                placeholder="e.g. John, Therese"
                />
            <label htmlFor="affiliation">How are you affiliated with this person?</label>    
                <input 
                type="text"
                id="affliation"
                name="affiliation"
                required
                minLength={1}
                maxLength={20}
                placeholder="e.g. Dad, Mom, Aunt, Uncle, Grandparent"
                />
            <label htmlFor="details">Please share a little of your heart, if you would like</label>
                <textarea 
                id="details"
                name="details"
                rows={5}
                cols={33}
                placeholder="e.g. My son has been away from the church for twelve years and..."
                maxLength={700}
                />
        </form>
    </div>
</section>
    </main>)
}

export default Main;