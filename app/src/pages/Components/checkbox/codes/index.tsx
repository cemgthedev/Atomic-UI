export const checkboxExample = `<div className="flex items-center gap-2">
  <Checkbox defaultChecked id="checkbox-example" />
  <label
    htmlFor="checkbox-example"
    className="text-sm font-medium"
  >
    Aceitar termos
  </label>
</div>`;

export const checkboxVariantsExample = `<div className="flex flex-wrap items-center gap-4">
  <div className="flex items-center gap-2">
    <Checkbox
      defaultChecked
      variant="default"
      id="checkbox-variant-default"
    />
    <label
      htmlFor="checkbox-variant-default"
      className="text-sm"
    >
      default
    </label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox
      defaultChecked
      variant="primary"
      id="checkbox-variant-primary"
    />
    <label
      htmlFor="checkbox-variant-primary"
      className="text-sm"
    >
      primary
    </label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox
      defaultChecked
      variant="success"
      id="checkbox-variant-success"
    />
    <label
      htmlFor="checkbox-variant-success"
      className="text-sm"
    >
      success
    </label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox
      defaultChecked
      variant="warning"
      id="checkbox-variant-warning"
    />
    <label
      htmlFor="checkbox-variant-warning"
      className="text-sm"
    >
      warning
    </label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox
      defaultChecked
      variant="danger"
      id="checkbox-variant-danger"
    />
    <label
      htmlFor="checkbox-variant-danger"
      className="text-sm"
    >
      danger
    </label>
  </div>
</div>`;

export const checkboxStatesExample = `<div className="flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <Checkbox defaultChecked id="checkbox-state-default" />
    <label htmlFor="checkbox-state-default" className="text-sm">
      Padrão
    </label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox disabled id="checkbox-state-disabled" />
    <label
      htmlFor="checkbox-state-disabled"
      className="text-sm"
    >
      Desabilitado
    </label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox
      aria-invalid
      defaultChecked
      id="checkbox-state-invalid"
    />
    <label htmlFor="checkbox-state-invalid" className="text-sm">
      Inválido
    </label>
  </div>
</div>`;

export const checkboxPropertiesExample = `<div className="flex items-center gap-2">
  <Checkbox
    defaultChecked
    variant="primary"
    rounded="lg"
    id="checkbox-properties"
  />
  <label
    htmlFor="checkbox-properties"
    className="text-sm font-medium"
  >
    Aprovar
  </label>
</div>`;
