import React from "react";
        import PropTypes from "prop-types";
        import { Editor } from "@tinymce/tinymce-react";
        const TinyEditor = ({ onChange, name, value }) => {
          return (
            <Editor
              apiKey={process.env.TINY_API}
              value={value}
              tagName={name}
              onEditorChange={(editorContent) => {
                onChange({ target: { name, value: editorContent } });
              }}
              outputFormat="html"
              init={{selector: 'textarea',
              plugins: 'a11ycheck code link',
              toolbar: 'undo redo paste italic indent bold blockquote ',
            }}
            />
          );
        };
        TinyEditor.propTypes = {
          onChange: PropTypes.func.isRequired,
          name: PropTypes.string.isRequired,
          value: PropTypes.string,
        };
        export default TinyEditor;