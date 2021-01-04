import React, { Fragment } from 'react';

function HeaderElement(props) {
  const { title, isFunctional, value, fallBack, className, id, style } = props;

  const HeaderElement = value ? value : fallBack || 'h1';

  function addClassToDiv() {
    let classes = [HeaderElement];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  function addClassToTag() {
    let tagClasses = (document.getElementsByTagName(
      HeaderElement
    ).className = className);

    return tagClasses;
  }

  function addId() {
    let tagIdToTag = (document.getElementsByTagName(HeaderElement).id = id);
    let tagIdToClass = (document.getElementsByClassName(HeaderElement).id = id);

    return tagIdToTag || tagIdToClass;
  }

  function addStyle() {
    let tagIdToTag = (document.getElementsByTagName(
      HeaderElement
    ).style = style);
    let tagIdToClass = (document.getElementsByClassName(
      HeaderElement
    ).style = style);

    return tagIdToTag || tagIdToClass;
  }

  return (
    <Fragment>
      {isFunctional === true ? (
        <HeaderElement
          className={addClassToTag()}
          id={addId()}
          style={addStyle()}
        >
          {title}
        </HeaderElement>
      ) : (
        <div className={addClassToDiv()} id={addId()} style={addStyle()}>
          {title}
        </div>
      )}
    </Fragment>
  );
}

export default HeaderElement;
