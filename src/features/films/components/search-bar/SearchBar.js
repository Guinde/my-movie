import React, { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {
    
    submit = (values, actions) => {
        this.props.setFilter(values)
        this.props.updateMovies(values).then(
          () => actions.setSubmitting(false)  
        );
    }
    
    render() {
        return (
            <Formik
                onSubmit={ this.submit }
                initialValues={ {query: '', language: 'en-US' } } >
                { ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                   <form className="d-flex flex-row p-2 m-2" onSubmit={ handleSubmit }>
                       <input name="query" className="flex-fill form-control mr-2" placeholder="Recherche..." 
                            onChange={ handleChange } 
                            onBlur={ handleBlur } />
                       <select className="mr-2 form-control w-25" 
                            name="sort_by"
                            onChange={ handleChange } 
                            onBlur={ handleBlur }>
                           <option value=""></option>
                           <option value="release_date.asc">Date Recente</option>
                           <option value="release_date.desc">Date Ancienne</option>
                           <option value="title.asc">Titre Ordre</option>
                           <option value="title.desc">Titre Inverse</option>
                           <option value="vote_average.asc">Note Ordre</option>
                           <option value="vote_average.desc">Note Inverse</option>
                       </select>
                       <select className="mr-2 form-control w-25" 
                            name="language"
                            onChange={ handleChange } 
                            onBlur={ handleBlur }>
                           <option value="en-US">Anglais</option>
                           <option value="fr-FR">Français</option>
                       </select>
                       <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting }>Chercher</button>
                   </form> 
                )}
            </Formik> 
        )
    }
}