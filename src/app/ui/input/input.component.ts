import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  public value: string | undefined;

  @Input() title = "Имя:*"
  @Input() placeholder = "Введите имя";

  private onChange!: (value: string) => void;
  private onTouched!: () => void;


  constructor() {
  }

  ngOnInit(): void {
  }


  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange(value);
  }

  public writeValue(value: string): void {
    this.value = value;

  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
