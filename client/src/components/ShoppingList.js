import React, {useState, useEffect, Fragment, useRef} from "react";
import {ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import uuid from "uuid";

const ShoppingList = () => {
    const rawItems = [
        {id: uuid(), name: 'eggs'},
        {id: uuid(), name: 'energy drink'},
        {id: uuid(), name: 'milk'},
        {id: uuid(), name: 'beer'},
    ];
    const addBtnRef = useRef(null);
    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        console.log('use effect call');
        setItemList(rawItems);
    }, [1]);


    const onAddItem = () => {
        let itemName = prompt("Enter Item Name").toString().trim();
        addBtnRef.current.blur();
        if (itemName) {
            setItemList([...itemList, {id: uuid, name: itemName}]);
        }
    };

    const onRemoveItem = (deletedId) => {
        let isArgee = window.confirm("Are you sure?");
        if(isArgee) {
            setItemList(itemList.filter(({id, name}) => id !== deletedId));
        }
    };

    const renderList = () => {
        if (itemList && itemList.length > 0) {
            return <ListGroup>
                <TransitionGroup>
                    {itemList.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn ml-auto"
                                    color="danger"
                                    size="sm"
                                    onClick={() => onRemoveItem(id) }
                                    style={{ marginRight: '10px'}}
                                >&times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        }
        return "Empty list";
    };

    return (
        <div style={{marginTop: '20px'}}>
            <Button color="dark"
                    onClick={onAddItem}
                    style={{marginBottom: '5px'}}
                    innerRef={addBtnRef}
            >Add Item</Button>
            {renderList()}
        </div>
    );
};

export default ShoppingList;