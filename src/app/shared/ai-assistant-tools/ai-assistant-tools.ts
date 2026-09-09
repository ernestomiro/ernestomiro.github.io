import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { aiAssistantToolsContent } from '../../content/ai-assistant-tools.data';
import { LocalizedText, selectLocalizedText } from '../../content/portfolio-content.models';
import { LanguageState } from '../../language/language-state';

@Component({
  selector: 'app-ai-assistant-tools',
  templateUrl: './ai-assistant-tools.html',
  styleUrl: './ai-assistant-tools.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiAssistantTools {
  private readonly languageState = inject(LanguageState);

  protected readonly content = aiAssistantToolsContent;

  protected localize(text: LocalizedText): string {
    return selectLocalizedText(text, this.languageState.language());
  }
}
