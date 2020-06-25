import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
import Modal from './Modal';
import useModal from './useModal';


const App = () => {
    const [resource, setResource] = useState('posts');
    const {isShowing, toggle} = useModal();

    return (
        <div>
            <UserList />
            <button className="button-default" onClick={toggle}>Show Modal</button>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );

}

export default App;
