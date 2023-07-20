import * as React from 'react';
import Markdown from 'markdown-to-jsx';

export const HeroSection = (props) => {
    return (
        <div className="hero outer" data-sb-field-path={props['data-sb-field-path']}>
            <div className="hero-container inner">
                {props.heading && (
                    <h1 className="hero-heading" data-sb-field-path=".heading">
                        {props.heading}
                    </h1>
                )}
                {props.subheading && (
                    <Markdown className="hero-subheading" data-sb-field-path=".subheading">
                        {props.subheading}
                    </Markdown>
                )}
            </div>
        </div>
    );
};
