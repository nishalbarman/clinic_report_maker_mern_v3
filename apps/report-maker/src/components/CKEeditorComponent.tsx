import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Bold } from "@ckeditor/ckeditor5-basic-styles";
import { Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Link } from "@ckeditor/ckeditor5-link";
import { Image } from "@ckeditor/ckeditor5-image";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { ImageCaption } from "@ckeditor/ckeditor5-image";
import { ImageStyle } from "@ckeditor/ckeditor5-image";
import { ImageToolbar } from "@ckeditor/ckeditor5-image";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { List } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { Table } from "@ckeditor/ckeditor5-table";
import { TableToolbar } from "@ckeditor/ckeditor5-table";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import { FontBackgroundColor } from "@ckeditor/ckeditor5-font";
import { FontColor } from "@ckeditor/ckeditor5-font";
import { FontFamily } from "@ckeditor/ckeditor5-font";
import { FontSize } from "@ckeditor/ckeditor5-font";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { ListProperties } from "@ckeditor/ckeditor5-list";
import { Markdown } from "@ckeditor/ckeditor5-markdown-gfm";
import { MediaEmbedToolbar } from "@ckeditor/ckeditor5-media-embed";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { Superscript } from "@ckeditor/ckeditor5-basic-styles";
import { Subscript } from "@ckeditor/ckeditor5-basic-styles";
import { TableCellProperties } from "@ckeditor/ckeditor5-table";
import { TableCaption } from "@ckeditor/ckeditor5-table";
import { TableColumnResize } from "@ckeditor/ckeditor5-table";
import { TableProperties } from "@ckeditor/ckeditor5-table";
import { Underline } from "@ckeditor/ckeditor5-basic-styles";

const CKEditorComponent: React.FC = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [
            Alignment,
            Autoformat,
            Bold,
            Italic,
            BlockQuote,
            Link,
            Image,
            Heading,
            ImageCaption,
            ImageStyle,
            ImageToolbar,
            Indent,
            List,
            MediaEmbed,
            PasteFromOffice,
            Table,
            TableToolbar,
            FindAndReplace,
            FontBackgroundColor,
            FontColor,
            FontFamily,
            FontSize,
            GeneralHtmlSupport,
            Highlight,
            ListProperties,
            Markdown,
            MediaEmbedToolbar,
            SourceEditing,
            Superscript,
            Subscript,
            TableCellProperties,
            TableCaption,
            TableColumnResize,
            TableProperties,
            Underline,
          ],
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
