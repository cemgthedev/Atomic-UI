export const inputGroupSourceCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui";

export function InputGroupExample() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Mail size={16} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Digite seu e-mail" />
      <InputGroupButton variant="primary">Enviar</InputGroupButton>
    </InputGroup>
  );
}`;
