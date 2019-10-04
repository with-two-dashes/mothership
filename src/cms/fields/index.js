const Field = widget => (label, name, { ...options }) => ({ label, name, ...options, widget })

export const StringField = Field('string')
export const DateTimeField = Field('datetime')
export const MarkdownField = Field('markdown')
