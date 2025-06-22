import React, { useState } from 'react';

const EmojiWithText = () => {
    const emojis = ['📦', '😂', '👌', '👍', '🩷', '🚀'];
    const [text, setText] = useState("");

    const addEmoji = (emoji) => {
        setText(text + emoji);
    };

    return (
        <div>
            <h2>Emoji With Text Picker</h2>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div style={{ marginTop: '10px' }}>
                {emojis.map((emoji, i) => (
                    <button
                        key={i}
                        onClick={() => addEmoji(emoji)}
                        style={{ fontSize: '24px', margin: '5px' }}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmojiWithText;
