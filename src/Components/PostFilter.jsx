import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}
                     placeholder='Cauta...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter ({...filter, sort: selectedSort})}
                defaultValue={'Sortare'}
                options={[
                    {value: 'title', name:'Dupa nume'},
                    {value: 'body', name:'Dupa descriere'}
                ]}
            />
        </div>
    );
};

export default PostFilter;