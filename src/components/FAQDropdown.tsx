interface FAQDropdownProps {
  headerText: string;
  contentText: string;
}

export default function FAQDropdown({
  headerText,
  contentText,
}: FAQDropdownProps) {
  return (
    <details className="faq-dropdown">
      <summary className="faq-dropdown-header">
        <span>{headerText}</span>
        <span className="faq-dropdown-chevron" aria-hidden="true" />
      </summary>
      <div className="faq-dropdown-content">
        <p>{contentText}</p>
      </div>
    </details>
  );
}
